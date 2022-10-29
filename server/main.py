import paramiko
import json
import sys
from scp import SCPClient, SCPException

class SSHManager:
    def __init__(self):
        self.ssh_client = None

    def create_ssh_client(self, hostname, port , username, key_filename):
        if self.ssh_client is None:
            self.ssh_client = paramiko.SSHClient()
            self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            self.ssh_client.connect(hostname, port=port, username=username, key_filename=key_filename)
        else:
            print("SSH client session exist")

    def create_ssh_client_pw(self, hostname, port , username, password):
        if self.ssh_client is None:
            self.ssh_client = paramiko.SSHClient()
            self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            self.ssh_client.connect(hostname, port=port, username=username, password=password)
        else:
            print("SSH client session exist")

    def close_ssh_client(self):
        self.ssh_client.close()

    def send_file(self, local_path, remote_path):
        try:
            with SCPClient(self.ssh_client.get_transport()) as scp:
                scp.put(local_path, remote_path, preserve_times=True)
        except SCPException:
            raise SCPException.message

    def get_file(self, remote_path, local_path):
        try:
            with SCPClient(self.ssh_client.get_transport()) as scp:
                scp.get(remote_path, local_path)
        except SCPException:
            raise SCPException.message

    def send_command(self, command):
        stdin, stdout, stderr = self.ssh_client.exec_command(command)
        output = []
        for line in stdout:
            output.append(line)
        output = listToString(output)
        return output

def aws_execute_wrk(url):
    cmd = 'wrk -t 4 -c 1000 -d 5s ' + str(url)

    ssh_manager = SSHManager()
    ssh_manager.create_ssh_client("15.165.203.129", "22" ,"ubuntu", "./Cloud Cover Monitor.pem")  # 세션생성
    output = ssh_manager.send_command(cmd)
    ssh_manager.close_ssh_client()  # 세션종료

    return output

def main():

    ncp_output = ncp_execute_wrk(sys.argv[1])
    ncp_output_dict = parse_wrk_output(ncp_output)
    ncp_output_json = json.dumps(ncp_output_dict)
    print(ncp_output_json)

if __name__ == '__main__':
    main()
# BANDIT - 자동 채보 서비스

Created: 2022년 10월 22일 오후 4:46
Tags: Notion, 디자인, 퍼블리싱, 프론트엔드
URL: https://github.com/Ssuhyeong/BANDIT_React
기간: 2022/03/01 → 2022/12/31
기술스택: AWS EC2, Express.js, Figma, Gitgub Pages, MySQL, Node.js, React, python

x**딥러닝을 활용한 밴드 세션별 자동 채보 서비스**

<img width="538" alt="%E1%84~1" src="https://user-images.githubusercontent.com/73628071/227087048-13112384-88e1-40ef-bd77-30ad76202c5b.PNG">
<img width="535" alt="%E1%84~2" src="https://user-images.githubusercontent.com/73628071/227087054-c3d7e891-5f7a-4771-ac38-b7a63d1bf66d.PNG">

**1. 프로젝트 소개**

ㅇ 본 프로젝트는 “딥러닝을 활용한 자동 채보 서비스”를 개발하여 시중에서 악보를 쉽게 구할 수 없는 곡을 연주하고자 하는 아마추어 밴드 연주자를 위해 딥러닝을 활용한 자동 채보 서비스를 제공하는 것을 목표로 함

ㅇ 사용자가 악보를 얻고자 하는 음원을 업로드하면 음원 분리 엔진을 통해 악기별로 음원을 분리한 후, 이를 각 악기 특성에 알맞은 악보 형태로 변환하여 제공하는 서비스를 제작함

**2. 추진배경 및 필요성**

ㅇ 코로나 19의 장기화와 더불어 음악 경연을 주제로 한 예능 프로그램들의 인기의 영향으로 악기 연주를 취미로 하는 사람이 증가함에 따라 직장인 밴드, 학생 밴드 등 다양한 아마추어 밴드가 생겨남

ㅇ 모든 아마추어 밴드가 유명한 곡만을 연주하지 않고, 최신곡, 유명하지 않은 곡, 정식음원이 아닌 곡 등을 연주하고자 하나, 이러한 곡은 악보를 쉽게 구할 수 없음

ㅇ 프로가 아닌 아마추어 밴드는 직접 음악을 듣고 음을 파악해 연주하는 데에 한계가 있음

ㅇ 현재 이를 해결할 수 있는 유일한 방법은 악보 제작 업체에 악보 제작을 의뢰하는 것이나, 파트(기타/베이스/드럼/건반)당 기본 5-8만원 이상의 비용과 4-5일의 시간이 소요된다는 문제가 있음. 따라서 자동 채보 기술을 개발하여 악보 제작에 발생하는 시간적, 비용적 문제 해결이 필요함

**3. 국내・외 기술 현황**

ㅇ 악보바다, 악보나라- 악보 제작/판매 사이트로, 악보 제작이 가능하나 사람이 직접 채보하는 방식을 사용하여 곡당 20만원 정도의 단가와 4-5일의 시간이 소요됨

ㅇ LALAL.AI- 음원 분리 서비스를 제공하는 사이트로, 음원 업로드시 악기별로 분리된 음원 다운로드가 가능하나, 악보를 제공하지 않음

## ❗️ 정보

- 한이음에서 진행하는 멘토링 프로젝트입니다.
- 5명의 학생들과 1명의 멘토님이 한 팀으로 원하는 프로젝트를 제안해서 진행하는 대외활동입니다.
- 딥러닝을 활용한 밴드 세션별  자동 채보 서비스로 딥러닝을 활용하여 음원을 분리, 채보하여 사용자들이 편하게 이용할 수 있도록 하는 것이 목적입니다.
- 제가 이 프로젝트에서 맡은 부분은 디자인 ( Figma ), 웹 개발 ( Front ), Notion 관리 부분으로 프로젝트를 진행했습니다.
- React로 화면을 설계했고, fullpage의 기능을 사용하여 한 번 드래그 할 경우 페이지가 넘겨가는 모션을 구현했습니다.
<img width="1278" alt="%E0AF4~1" src="https://user-images.githubusercontent.com/73628071/227087103-0a8ba65b-2071-4ddf-9c67-bdadac9ba303.PNG">
<img width="1278" alt="%E1%84~3" src="https://user-images.githubusercontent.com/73628071/227087113-facc6bb5-711e-498f-a245-1f3148746a5f.PNG">
<img width="1274" alt="%E1%84~4" src="https://user-images.githubusercontent.com/73628071/227087117-39e83ca4-99c0-4afc-95e5-0f07b62c9c66.PNG">
<img width="1269" alt="%EF99D~1" src="https://user-images.githubusercontent.com/73628071/227087118-deb35445-7a6a-4216-9361-196dddd455f5.PNG">
<img width="1270" alt="%E1C55~1" src="https://user-images.githubusercontent.com/73628071/227087120-45fecbaf-0024-4ef0-84d2-ed469f4245c7.PNG">
<img width="1271" alt="%E9840~1" src="https://user-images.githubusercontent.com/73628071/227087122-829bfdd1-6a7a-4f1d-9f1f-eda4a52d22e0.PNG">

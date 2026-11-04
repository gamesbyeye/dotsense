# Dot Sense · 웹사이트 파일

이 폴더 안의 파일을 그대로 웹에 올리면 Dot Sense 웹사이트가 돼요.
올린 뒤에는 Chrome · Edge에서 메뉴 아래 **BROWSER APP**을 눌러 컴퓨터 앱처럼 쓸 수 있고, 한 번 열어 두면 인터넷이 끊겨도 열려요.

## 들어 있는 것

| 파일 | 하는 일 |
|---|---|
| index.html | 게임 |
| og.png | 공유 카드 (링크를 붙여 넣으면 뜨는 미리보기 그림) |
| manifest.webmanifest · sw.js | 앱 설치 · 인터넷 없이 열기 |
| icon-*.png · apple-touch-icon.png · favicon.* | 앱 아이콘 |
| screenshot-*.png | Chrome 설치 창에 보이는 그림 |
| *.woff2 · fonts-OFL.txt | 글꼴(Oswald · Public Sans · IBM Plex Sans KR)과 라이선스 |

## 1. GitHub Pages에 올리기 (무료)

1. github.com에 가입하고 로그인해요.
2. 오른쪽 위 **+** → **New repository**. 이름은 `dotsense`, **Public**을 고르고 **Create repository**.
3. 새 저장소 화면의 **uploading an existing file**을 누르고, 이 폴더 **안의 파일 전부**를 끌어다 놓아요. (폴더째가 아니라 안의 파일들) → **Commit changes**.
4. **Settings → Pages**에서 Branch를 `main`, 폴더를 `/ (root)`로 두고 **Save**.
5. 1~2분 뒤 `https://아이디.github.io/dotsense/`가 열려요. 이게 웹사이트 주소예요.

## 2. 공유 카드 주소

공유 카드는 `https://gamesbyeye.github.io/dotsense/og.png`로 들어 있어요. 아이디나 저장소 이름이 바뀌면 index.html의 og:image · twitter:image · og:url 세 줄을 함께 고쳐요.
카카오톡은 미리보기를 저장해 두기 때문에, 옛 카드가 보이면 카카오 개발자 사이트의 **공유 디버거**에서 주소를 넣고 초기화하면 돼요.

## 3. 컴퓨터 앱으로 설치하기

- **Chrome · Edge** (Windows · Mac): 웹사이트를 열고 메뉴 화면 아래의 **BROWSER APP**을 누르거나, 주소창 오른쪽의 설치 아이콘을 눌러요. 시작 메뉴 · Launchpad · 바탕 화면에 Dot Sense가 생겨요.
- **Mac Safari 17 이상**: 메뉴 막대의 **파일 → Dock에 추가**.
- Firefox는 앱 설치를 지원하지 않아요. 웹사이트로는 그대로 할 수 있어요.
- 지우기: 앱 창 오른쪽 위 **⋮ → 제거** (Chrome · Edge), Dock에서 휴지통으로 (Safari).

## 4. Windows 설치 파일 올리기 (메뉴 아래 WINDOWS (.EXE) 링크)

설치 파일은 크기가 커서(약 96MB) 저장소에 바로 못 올리고, **Releases**에 올려요.

1. 저장소 첫 화면 오른쪽의 **Releases → Create a new release**.
2. **Choose a tag**에 `v2`를 쓰고 **Create new tag**. Release title은 `Dot Sense`.
3. 설치 파일을 아래 칸에 끌어다 놓아요. 파일 이름은 꼭 **`DotSense-Setup.exe`** (메뉴의 링크가 이 이름을 찾아요).
4. **Publish release**.

새 버전을 낼 때는 새 release를 만들고 같은 이름(`DotSense-Setup.exe`)으로 올리면, 메뉴의 링크가 자동으로 최신 파일을 가리켜요.
받은 사람에게 "Windows의 PC 보호" 창이 뜨면 **추가 정보 → 실행**을 누르면 돼요 (서명하지 않은 프로그램이라서 뜨는 경고).

## 5. 기록은 어디에 남나요

- 기록은 그 브라우저 안에만 저장돼요. 같은 브라우저의 웹사이트와 설치한 앱은 기록을 같이 써요.
- Claude 앱 안의 게임과 웹사이트는 기록이 따로예요. **RECORDS → 기록 링크 만들기**로 만든 링크를 열거나, **기록 가져오기**에 붙여 넣으면 옮겨져요.

## 6. 고쳐서 다시 올릴 때

바뀐 파일만 같은 이름으로 다시 올리면 돼요. 게임 화면은 인터넷이 되면 늘 새 버전으로 열려요.

## 글꼴

Oswald, Public Sans, IBM Plex Sans KR · SIL Open Font License 1.1 (fonts-OFL.txt).

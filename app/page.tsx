import { Awards } from './components/awards'
import { Education } from './components/education'
import { Experience } from './components/experience'
import { Projects } from './components/project'
import { Explorer } from './components/explorer'
import { Interests } from './components/interests'
import Articles from './components/article'
import { fetchRssPosts } from "@/lib/rss";

export default async function Page() {
  const posts = await fetchRssPosts(4).catch(() => []);

  return (
    <section>
      <p className="mb-4">
        {`저는 백엔드 개발을 중심으로 일하고 있는 소프트웨어 엔지니어입니다. 비용 효율성과 안정성을 우선에 두고 시스템을 설계해 왔고, 필요하다면 프론트엔드나 데브옵스 영역까지 경계를 두지 않고 문제를 해결해 왔습니다. 역할보다 결과가 중요하다고 생각하고, 프로젝트가 끝까지 완성되는 과정을 책임지는 데서 가장 큰 보람을 느낍니다.`}
      </p>
      <p className="mb-4">
        {`기술을 다룰 때 늘 데이터에서 출발하려고 합니다. 기능을 만드는 데서 그치지 않고, 그 기능이 실제 사용자 경험과 비즈니스 성과로 어떻게 이어지는지를 고민하고 있습니다. 사용자의 입장에서 문제를 정의하고, 비즈니스 목표에 맞는 구조를 설계하는 과정 자체가 개발의 가장 흥미로운 부분이라고 생각합니다. “making the world run better through data”, 데이터와 기술이 결합될 때, 세상은 조금 더 효율적이고 덜 불편해질 수 있다고 믿습니다. 이 믿음이 제가 기술을 배우고, 기록하고, 공유하는 이유이기도 합니다.`}
      </p>
      <p className="mb-4">
        {`현재는 AI 기반 의료 솔루션 기업에서 서버 개발을 맡아 온프레미스 환경의 배포와 운영 안정성을 책임지고 있습니다. 단순히 코드를 작성하는 데 그치지 않고, 팀이 더 잘 협업할 수 있는 개발 문화와 프로세스를 만드는 일에도 꾸준히 참여하고 있습니다. `}
      </p>
      <p className="mb-4">
        {`그동안 지식 기반 시스템, 의료 AI 스타트업, 클라우드 중심의 대기업 환경까지 서로 다른 규모와 도메인에서 경험을 쌓아왔습니다. 덕분에 기술을 특정 스택이나 유행이 아닌, 비즈니스와 사용자의 맥락 속에서 바라보는 시각을 갖게 되었습니다. 개발자의 성장이 곧 팀과 비즈니스의 성장으로 이어진다고 믿으며, 지금도 배우는 속도를 늦추지 않으려 노력하고 있습니다.`}
      </p>
      <div className="my-10">
        <Experience></Experience>
      </div>
      <div className="my-10">
        <Projects></Projects>
      </div>
      <div className="my-10">
        <Articles posts={posts}></Articles>
      </div>
      <div className="my-10">
        <Explorer></Explorer>
      </div>
      <div className="my-10">
        <Education></Education>
      </div>
      <div>
        <Awards></Awards>
      </div>
      <div className="my-10">
        <Interests></Interests>
      </div>
    </section>
  )
}

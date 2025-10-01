import { Awards } from './components/awards'
import { Education } from './components/education'
import { Experience } from './components/experience'
import { Projects } from './components/project'
import { Explorer } from './components/explorer'
import { Interests } from './components/interests'

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        {`저는 개발자이자 소프트웨어 엔지니어로서 비용 효율성과 안정성을 갖춘 백엔드 시스템을 설계하고, 필요에 따라 프론트엔드와 데브옵스 영역까지 아우르며 프로젝트를 완수했습니다. 데이터 기반의 사고를 바탕으로, 기술이 단순히 기능 구현에 머무르지 않고 사용자 경험과 비즈니스 성과로 이어지도록 설계하는데 집중합니다. 사용자의 관점에서 문제를 정의하고 비즈니스 목표에 부합하는 시스템을 만드는 일에 큰 보람과 흥미를 느껴왔습니다.`}
      </p>
      <p className="mb-4">
        {`'making the world run better through data'라는 가치관을 바탕으로, 데이터와 기술로 세상을 더 나은 방향으로 나아가는 데 기여하고자 합니다.`}
      </p>
      <p className="mb-4">
        {`현재 저는 AI 기반 의료 솔루션 기업에서 서버 개발과 온프레미스 환경의 안정적인 배포와 운영을 담당하고 있으며, 애자일 기반 협업과 개발 문화 개선에도 적극적으로 참여하고 있습니다.`}
      </p>
      <p className="mb-4">
        {`그동안 지식 베이스, 의료 AI 스타트업, 클라우드 기반 대기업까지 다양한 규모와 도메인에서 경험을 쌓으며 산업과 기술 전반에 대한 이해를 넓혔습니다. 사용자 중심의 시각으로 비즈니스 목표에 부합하는 기술 구현을 지향합니다. 또한 개발자의 성장이 곧 비즈니스의 성장으로 이어진다는 믿음 아래, 끊임 없이 배우고 성장하는 자세로 일하고 있습니다.`}
      </p>
      <div className="my-8">
        <Experience></Experience>
      </div>
      <div className="my-8">
        <Projects></Projects>
      </div>
      <div className="my-8">
        <Explorer></Explorer>
      </div>
      <div className="my-8">
        <Education></Education>
      </div>
      <div>
        <Awards></Awards>
      </div>
      <div className="my-8">
        <Interests></Interests>
      </div>
    </section>
  )
}

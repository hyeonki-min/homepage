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
        {`저는 소프트웨어 엔지니어입니다. 비용 효율성과 안정성을 갖춘 백엔드 시스템을 설계하고, 필요에 따라 프론트엔드와 데브옵스를 아우르고 있습니다. 데이터 기반 사고를 바탕으로, 기술이 사용자와 비즈니스에 실질적인 가치를 제공할 수 있는 방향을 늘 고민하며, 단순한 기능 구현을 넘어 사용자 중심의 시각으로 비즈니스 목표에 부합하는 시스템을 만드는 일에 흥미를 느낍니다.`}
      </p>
      <p className="mb-4">
        {`개발자 민현기는 'making the world run better through data'라는 가치관을 바탕으로, 데이터와 기술로 세상을 더 나은 방향으로 나아가는 데 기여하고자 합니다.`}
      </p>
      <p className="mb-4">
        {`현재 저는 AI 기반 의료 솔루션 기업에서 서버 개발과 온프레미스 환경에서의 안정적인 배포와 운영을 담당하고 있으며, 애자일 기반의 협업과 개발 문화 개선에도 적극 참여하고 있습니다.`}
      </p>
      <p className="mb-4">
        {`그동안 스타트업(지식베이스, 의료AI)부터 대기업(클라우드)까지 다양한 규모와 도메인에서 일한 경험을 바탕으로, 산업과 기술 전반에 대한 이해를 넓혀왔으며, 사용자 중심의 시각으로 비즈니스 목표에 부합하는 기술 구현을 지향합니다. 개발자의 성장이 곧 비즈니스의 성장으로 이어진다는 마음으로 일하고 있습니다.`}
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

import Link from 'next/link'

export function Experience() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Experience
      </h1>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2022 to Present">2022 — Present</header>
      <div className="z-10 sm:col-span-6 mb-4">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://iheuron.com" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer, Accessibility at Heuron">
              <span>Software Engineer, <span className="inline-block">Heuron</span></span>
            </Link>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">Java, Spring Boot, Python, Docker 기반 마이크로서비스 아키텍처를 설계·운영하고,
GitOps 기반 배포 파이프라인과 Testcontainer, RestAssured 기반 통합 테스트 환경을 구축했습니다.
MLOps 기반 의료 데이터 관리 시스템과 시스템 및 어플리케이션 모니터링 환경을 구축했으며, DICOM 통신 처리, 병원 CS 대응 등 AI 헬스케어 도메인에서 실무를 주도했으며,
기술 공유, 세미나를 통해 주니어 성장과 개발 문화 확산에도 적극 기여했습니다.</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Java</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Spring Boot</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Dicom</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Docker</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Redis</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">MariaDB</div></li>
        </ul>
      </div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2020 to 2021">2020 — 2021</header>
      <div className="z-10 sm:col-span-6 mb-4">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://dktechin.com" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer, Accessibility at DK Techin">
              <span>Software Engineer, <span className="inline-block">DK Techin</span></span>
            </Link>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">카카오 전사 인프라 시스템과 MSA 기반의 백엔드 서비스를 설계·운영했습니다.
Kafka, RabbitMQ, Redis, Prometheus, Grafana, Kubernetes 기반으로 실시간 데이터 처리와 모니터링 환경을 구축했고,
장애 관리, 방문자 안내, 복지 시스템 등 사내 서비스들의 Spring 기반 Admin 및 API 서버를 개발했습니다.
Helm 기반 쿠버네티스 배포, JaCoCo+SonarQube 환경 설정 등 DevOps와 코드 품질 개선도 주도했습니다.
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Java</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Spring Boot</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Kubernetes</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">RabbitMQ</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">ElasticSearch</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Kafka</div></li>
        </ul>
      </div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2016 to 2019">2016 — 2019</header>
      <div className="z-10 sm:col-span-6 mb-4">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://li-st.com" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer, Accessibility at LiST">
              <span>Software Engineer, <span className="inline-block">LiST</span></span>
            </Link>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">메타데이터 표준 등록 및 검색 플랫폼, 논문 공개 서비스, QA 챗봇 등 다양한 공공/학술 도메인 서비스를 개발했습니다.
Spring Boot, JPA, Elasticsearch 기반 백엔드 설계와 Python+Django 기반 오픈소스 커스터마이징을 수행했으며,
GRPC·Netty를 활용한 고성능 통신 서버와 ISO-11179 기반 메타데이터 모델링 경험이 있습니다. 또한 RDF와 TTL 형식의 온톨로지를 설계하고 지식베이스 검색 시스템을 구축한 경험이 있습니다.
AWS EC2, Nginx, PostgreSQL 기반의 다수의 웹 서비스를 직접 배포하고 운영했습니다.
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Java</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Spring</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">RDF</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Jena</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Knowledge Graph</div></li>
        </ul>
      </div>
      <div className="mt-4 mb-12">
        <Link className="inline-flex items-center gap-2 text-slate-200 hover:bg-neutral-800 hover:border-slate-500 transition-all duration-200 group"
          href={"/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Discover my résumé</span>
        </Link>      
      </div>
    </div>
  )
}

import Link from 'next/link'

export function ProjectArchives() {
  let allProjects = [
    {"slug": 44, "year": "2025", "project": "Hyeonki Min", "builtAt": "Fun", "builtWith": ["Next.js",], "link": "https://github.com/hyeonki-min/hyeonki"},

    {"slug": 43, "year": "2024", "project": "의료 데이터 관리 시스템", "builtAt": "Work", "builtWith": ["Java", "Spring", "airflow", "MariaDB", "Docker"], "link": ""},
    {"slug": 42, "year": "2024", "project": "MRI기반 파킨슨병 진단 보조 AI 솔루션", "builtAt": "Work", "builtWith": ["Java", "Spring", "MariaDB", "Docker"], "link": ""},

    {"slug": 41, "year": "2024", "project": "mididice.github.io", "builtAt": "Fun", "builtWith": ["TypeScript", "Next.js",], "link": "https://github.com/mididice/mididice.github.io"},
    {"slug": 40, "year": "2024", "project": "economins", "builtAt": "Fun", "builtWith": ["TypeScript", "Next.js"], "link": "https://github.com/hyeonki-min/economins"},

    {"slug": 39, "year": "2023", "project": "interplaytions-web", "builtAt": "Fun", "builtWith": ["TypeScript", "Phaser3", "Tone.js"], "link": "https://github.com/mididice/interplaytions-web"},
    {"slug": 38, "year": "2023", "project": "관류 CT 기반 혈류역학 분석 AI 솔루션", "builtAt": "Work", "builtWith": ["Java", "Spring", "MariaDB", "Docker"], "link": ""},
    {"slug": 37, "year": "2022", "project": "비조영 CT 기반 뇌졸중 분석 AI 솔루션", "builtAt": "Work", "builtWith": ["Java", "Spring", "MariaDB", "Docker"], "link": ""},

    {"slug": 36, "year": "2022", "project": "퇴행성 뇌질환 분석 AI 솔루션", "builtAt": "Work", "builtWith": ["React", "Conerstone.js", "vtk.js"], "link": ""},
    {"slug": 35, "year": "2022", "project": "전이성 뇌종양 자동 분류 AI 솔루션", "builtAt": "Work", "builtWith": ["Java", "Spring", "MariaDB", "Docker"], "link": ""},

    {"slug": 34, "year": "2022", "project": "WZWYC", "builtAt": "Fun", "builtWith": ["React", "D3.js"], "link": "https://github.com/hyeonki-min/WZWYC"},
    {"slug": 33, "year": "2021", "project": "전사 서버 온습도전력 관리 시스템", "builtAt": "Work", "builtWith": ["Java", "Spring", "RabbitMQ", "Grafana", "ElasticSearch", "k8s"], "link": ""},
    {"slug": 32, "year": "2021", "project": "전사 서버 장애 관리 시스템", "builtAt": "Work", "builtWith": ["Java", "Spring", "MariaDB", "kafka", "k8s"], "link": ""},
    {"slug": 31, "year": "2021", "project": "평가 관리 시스템", "builtAt": "Work", "builtWith": ["Java", "Spring", "MariaDB", "k8s"], "link": ""},
    {"slug": 30, "year": "2021", "project": "휴양지 예약 시스템", "builtAt": "Work", "builtWith": ["Java", "Spring", "MariaDB", "k8s"], "link": ""},

    {"slug": 29, "year": "2021", "project": "mididice808", "builtAt": "Fun", "builtWith": ["React"], "link": ""},
    {"slug": 28, "year": "2020", "project": "온콜 관제 시스템", "builtAt": "Work", "builtWith": ["Java", "Spring", "MariaDB", "k8s"], "link": ""},
    {"slug": 27, "year": "2020", "project": "방문자 안내 시스템", "builtAt": "Work", "builtWith": ["Java", "Spring", "MariaDB", "k8s"], "link": ""},

    {"slug": 26, "year": "2020", "project": "Doodlering", "builtAt": "Fun", "builtWith": ["ml5.js", "Go"], "link": "https://github.com/mididice/Doodlering"},
    {"slug": 25, "year": "2020", "project": "hyeonki", "builtAt": "Fun", "builtWith": ["Gatsby"], "link": "https://github.com/hyeonki-min/hyeonki"},
    {"slug": 24, "year": "2019", "project": "kosimpletaxjs", "builtAt": "Fun", "builtWith": ["JavaScript"], "link": "https://github.com/hyeonki-min/kosimpletaxjs"},
    {"slug": 23, "year": "2019", "project": "kosimpletax", "builtAt": "Fun", "builtWith": ["Python"], "link": "https://github.com/hyeonki-min/kosimpletax"},
    {"slug": 22, "year": "2019", "project": "lowSugar", "builtAt": "Fun", "builtWith": ["Python", "Pandas"], "link": "https://github.com/hyeonki-min/lowSugar"},
    {"slug": 21, "year": "2019", "project": "metro-network", "builtAt": "Fun", "builtWith": ["Python", "NetworkX"], "link": "https://github.com/hyeonki-min/metro-network"},
    {"slug": 20, "year": "2019", "project": "표준 메타데이터 플랫폼", "builtAt": "Work", "builtWith": ["Java", "Spring", "PostgreSQL"], "link": "https://github.com/mididice/MMWD"},
    {"slug": 19, "year": "2019", "project": "MMWD", "builtAt": "Fun", "builtWith": ["Python", "jQuery"], "link": "https://github.com/mididice/MMWD"},
    {"slug": 18, "year": "2018", "project": "챗봇 솔루션", "builtAt": "Work", "builtWith": ["Java", "netty"], "link": "https://github.com/hyeonki-min/murtnat"},
    {"slug": 17, "year": "2018", "project": "오픈액세스 리포지터리", "builtAt": "Work", "builtWith": ["Java", "Spring", "MySQL"], "link": "https://github.com/hyeonki-min/murtnat"},

    {"slug": 16, "year": "2018", "project": "interplaytions", "builtAt": "Fun", "builtWith": ["Unity"], "link": "https://github.com/mididice/interplaytions"},
    {"slug": 15, "year": "2018", "project": "interplaytions-server", "builtAt": "Fun", "builtWith": ["Python", "TensorFlow"], "link": "https://github.com/mididice/interplaytions-server"},
    {"slug": 14, "year": "2018", "project": "murtnat", "builtAt": "Fun", "builtWith": ["p5.js",], "link": "https://github.com/hyeonki-min/murtnat"},
    {"slug": 13, "year": "2017", "project": "메타데이터 구축 플랫폼", "builtAt": "Work", "builtWith": ["Python", "Django", "PostgreSQL"], "link": ""},
    {"slug": 12, "year": "2017", "project": "yappbot", "builtAt": "Fun", "builtWith": ["Python", "konlpy"], "link": "https://github.com/hyeonki-min/yappbot"},
    {"slug": 11, "year": "2017", "project": "mididice", "builtAt": "Fun", "builtWith": ["Spring Boot", "jfugue", "timidity", "MIDI.js", "waveform.js"], "link": "https://github.com/mididice/mididice"},
    {"slug": 10, "year": "2017", "project": "건식이", "builtAt": "Fun", "builtWith": ["Android"], "link": ""},
    {"slug": 9, "year": "2017", "project": "neologism", "builtAt": "Fun", "builtWith": ["Spring"], "link": ""},
    {"slug": 8, "year": "2016", "project": "자연어 처리 테스트 플랫폼", "builtAt": "Work", "builtWith": ["Java", "Spring", "MySQL"], "link": "https://github.com/hyeonki-min/highTemple"},
    {"slug": 7, "year": "2016", "project": "영상 지식베이스 구축 지원 도구", "builtAt": "Work", "builtWith": ["Java", "Jena", "RDF", "MySQL"], "link": "https://github.com/hyeonki-min/highTemple"},
    {"slug": 6, "year": "2016", "project": "전거통제구축도구", "builtAt": "Work", "builtWith": ["Java", "JavaScript", "MySQL"], "link": "https://github.com/hyeonki-min/highTemple"},

    {"slug": 5, "year": "2015", "project": "HighTemple", "builtAt": "Fun", "builtWith": ["Java", "Spring"], "link": "https://github.com/hyeonki-min/highTemple"},
    {"slug": 4, "year": "2015", "project": "Seoul Public Transport", "builtAt": "Fun", "builtWith": ["Java", "Spring"], "link": ""},
    {"slug": 3, "year": "2013", "project": "구글 글래스를 이용한 소장도서 위치추적 앱 개발", "builtAt": "Fun", "builtWith": ["Text"], "link": ""},
    {"slug": 2, "year": "2013", "project": "Egon Schiele Graph", "builtAt": "Fun", "builtWith": ["RDF"], "link": ""},
    {"slug": 1, "year": "2012", "project": "Tolkien Thesaurus", "builtAt": "Fun", "builtWith": ["Text"], "link": ""},
  ]
  return (
    <div>
      <table className="w-full text-left">
        <thead className="sticky top-0 z-10 px-6 py-5">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-300">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-300">Project</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-300 sm:table-cell">Built At</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-300 sm:table-cell">Built With</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-300 sm:table-cell">Link</th>
          </tr>
        </thead>
        <tbody>
          {allProjects
          .map((project) => (
            <tr
              key={project.slug}
            >
              <td className="py-4 pr-8 text-sm font-semibold text-slate-400">
                {project.year}
              </td>
              <td className="py-4 pr-8 text-sm font-semibold text-slate-200">
                {project.project}
              </td>
              <td className="hidden py-4 pr-8 text-sm font-semibold text-slate-400 lg:table-cell">
                {project.builtAt}
              </td>
              <td className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
                <ul className="flex flex-wrap gap-2">
                {project.builtWith.filter(item => item).map((tech, idx) => (
                  <li key={idx}>
                    <span key={idx} className="flex-1 items-center px-2 py-1 text-xs font-medium leading-5 bg-slate-600 text-white rounded-full dark:bg-green-700 dark:text-slate-100">
                      {tech}
                    </span>
                  </li>
                ))}
                </ul>
              </td>
              <td className="hidden py-4 pr-8 text-sm font-semibold text-slate-400 lg:table-cell">
                <Link
                    key={project.project}
                    href={`${project.link}`}
                    title={`${project.link}`}
                  >
                    {project.link ? '🔗': null}
                  </Link>              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

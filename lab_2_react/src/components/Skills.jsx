function Skills() {
  return (
    <section className="mb-10">
      <h2 className="text-base uppercase tracking-widest mb-4 border-b-2 border-purple-300 pb-2 font-bold text-gray-800 dark:border-purple-700 dark:text-gray-200">Навички</h2>
      <ul className="space-y-5 text-sm text-gray-700 dark:text-gray-300">
        <li>
          <strong className="text-gray-900 dark:text-white text-base">Hard Skills:</strong>
          <ul className="pl-3 mt-2 space-y-2 border-l-2 border-purple-400 dark:border-purple-500 ml-1">
              <li className="pl-2"><strong>Blue Team (SOC):</strong> Знайомство з Elasticsearch + Kibana</li>
              <li className="pl-2"><strong>Red Team (Pentest):</strong> Пошук вразливостей, основи веб-пентесту.</li>
              <li className="pl-2"><strong>Low-level:</strong> Основи Reverse Engineering.</li>
              <li className="pl-2"><strong>Programming:</strong> Python, C.</li>
              <li className="pl-2"><strong>General:</strong> Linux, git, мережі</li>
          </ul>
        </li>
        <li><strong className="text-gray-900 dark:text-white">Soft Skills:</strong> Комунікабельність, допитливість, постійне навчання, критичне мислення.</li>
        <li><strong className="text-gray-900 dark:text-white">Мови:</strong> Українська, Англійська (B1 - Intermediate).</li>
      </ul>
    </section>
  )
}

export default Skills
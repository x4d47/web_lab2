function Contacts() {
  return (
    <section className="mb-10">
      <h2 className="text-base uppercase tracking-widest mb-4 border-b-2 border-purple-300 pb-2 font-bold text-gray-800 dark:border-purple-700 dark:text-gray-200">Контакти</h2>
      <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <li>
            <strong className="block text-gray-900 dark:text-white">Email:</strong> 
            <a href="mailto:m.hlynka@proton.me" className="text-purple-700 hover:text-purple-900 hover:underline transition-colors duration-200 dark:text-purple-400 dark:hover:text-purple-300">m.hlynka@proton.me</a>
          </li>
          <li>
            <strong className="block text-gray-900 dark:text-white">Телефон:</strong> 
            <a href="tel:+380684485771" className="text-purple-700 hover:text-purple-900 hover:underline transition-colors duration-200 dark:text-purple-400 dark:hover:text-purple-300">+380 68 448 57 71</a>
          </li>
          <li>
            <strong className="block text-gray-900 dark:text-white">GitHub:</strong> 
            <a href="https://github.com/x4d47" target="_blank" rel="noreferrer" className="text-purple-700 hover:text-purple-900 hover:underline transition-colors duration-200 dark:text-purple-400 dark:hover:text-purple-300">github.com/x4d47</a>
          </li>
      </ul>
    </section>
  )
}

export default Contacts
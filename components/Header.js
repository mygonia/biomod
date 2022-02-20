import Link from 'next/link'

export default function Header({ title }) {
  return (
  <>
    <h1 className="title">{title}</h1>
    <ul>
      <li>
        <Link href="/sections/abstract.js">
          <a>Abstract</a>
        </Link>
      </li>
      <li>
        <Link href="/sections/introduction.js">
          <a>Introduction</a>
        </Link>
      </li>
        <ul>
          <li>
            <Link href="/sections/background.js">
              <a>Background</a>
            </Link>
          </li>
          <li>
            <Link href="/sections/problem.js">
              <a>Problem</a>  
            </Link>
          </li>
        </ul>
      <li>
        <Link href="/sections/solution.js">
          <a>Solution</a>
        </Link>
      </li>
        <ul>
          <li>Summary of Findings</li>
          <li>Mechanism</li>
          <li>caDNAno Simulations</li>
        </ul>
      <li>Materials and Methods</li>
      <li>Discussion</li>
      <li>Future</li>
      <li>Team</li>
    </ul>
  </>
  )
}

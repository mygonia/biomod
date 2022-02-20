import Link from 'next/link'

export default function Header({ title }) {
  return (
  <>
    <h1 className="title">{title}</h1>
    <ul>
      <li>
        <Link href="/sections/abstract">
          <a>Abstract</a>
        </Link>
      </li>
      <li>
        <Link href="/sections/introduction">
          <a>Introduction</a>
        </Link>
      </li>
        <ul>
          <li>
            <Link href="/sections/background">
              <a>Background</a>
            </Link>
          </li>
          <li>
            <Link href="/sections/problem">
              <a>Problem</a>  
            </Link>
          </li>
        </ul>
      <li>
        <Link href="/sections/solution">
          <a>Solution</a>
        </Link>
      </li>
        <ul>
          <li>
            <Link href="/sections/summary">
              <a>Summary of Findings</a>
            </Link>
          </li>
          <li>
            <Link href="/sections/mechanism">
              <a>Mechanism</a>
            </Link>
          </li>
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

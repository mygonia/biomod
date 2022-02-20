import Link from 'next/link'

export default function Header({ title }) {
  return (
  <>
    <div className="">
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
          <li>
            <Link href="/sections/cadnano">
              <a>caDNAno Simulations</a>
            </Link>
          </li>
        </ul>
      <li>
        <Link href="/sections/materials">
          <a>Materials and Methods</a>
        </Link>
      </li>
      <li>
        <Link href="/sections/discussion">
          <a>Discussion</a>
        </Link>
      </li>
      <li>
        <Link href="/sections/future">
          <a>Future</a>
        </Link>
      </li>
      <li>
        <Link href="/sections/team">
          <a>Team</a>
        </Link>
      </li>
    </ul>
    </div>
  </>
  )
}

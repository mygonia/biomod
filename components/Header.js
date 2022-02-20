export default function Header({ title }) {
  return (
  <>
    <h1 className="title">{title}</h1>
    <ul>
      <li>Abstract</li>
      <li>Introduction</li>
        <ul>
          <li>Background</li>
          <li>Problem</li>
        </ul>
      <li>Solution</li>
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

import Script from 'next/script'

export default function dnaBackground() {
    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/86/three.min.js"
            />
            <script src="/public/static/script2.js"></script>
            <script src="/public/static/script.js"></script>
        </>
    )
}
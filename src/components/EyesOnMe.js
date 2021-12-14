// Code EyesOnMe Component Here
function EyeOnMe() {
    return (
        <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
    )
}

export default EyeOnMe;
const validation = (e)=>{
    const params = e.target.getAttribute('validation');
    for (const property in params[0]) {
        console.log(`${property}: ${params[property]}`);
    }
}

export default validation;
import { useState } from "react"

const ContactForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const res = await fetch('/api/contact', {
            body: JSON.stringify({ name: name }),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        })
        const result = await res.json()
        alert(`Is this your full name : ${result.name}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>Name</label><br />
                <input type="text" id="name" name="name" required /><br />
                <button >Submit</button>
            </form>
        </div>
    )
}
export default ContactForm
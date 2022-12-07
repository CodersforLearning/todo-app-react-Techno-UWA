import React from 'react'

interface Props {
    handleSubmit(): void;
}


export default function TodoForm({ handleSubmit }: Props) {
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Task...' />
            <input type="submit" value='Submit' onClick={() => {console.log('clicked')}} />
        </form>
    )
}
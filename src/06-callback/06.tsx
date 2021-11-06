import React, { ChangeEvent, MouseEvent } from 'react'

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert("Button delete was has been push")
        console.log(e.currentTarget.name);
    }

    const saveUser = () => {
        alert("Button save was has been push")
    }

    const onHandlerChanged = () => {
        console.log("data textarea changed");
    }
    const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("text changed" + e.currentTarget.value);
    }

    const focusLast = () => {
        console.log("focus textarea last");
    }

    return <>
        <div>My operations</div>
        <div>
            <button name="delete" onClick={deleteUser} tabIndex={2}>delete</button>
            <button name="save" onClick={saveUser} tabIndex={3}>save</button>
        </div>

        <textarea onChange={onHandlerChanged}
            tabIndex={0}
            onBlur={focusLast}
        >
            Start text
        </textarea>
        <input type="text" tabIndex={1} onChange={onTextChanged} />

    </>
}


// JS Core

{/* <html>
    <button id="btnDelete">delete</button>

    <script>
        const deleteUser = () => {
            alert("delete button")
        }

        const btn =document.getElementById("btnDelete")

        // methods call action button
        btn.onclick = deleteUser
        btn.EventListener('click', deleteUser)

    </script>

</html> */}
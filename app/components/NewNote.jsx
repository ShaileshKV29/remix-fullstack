export default function NewNote() 
{
    return <form method="post">
        <p>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
        </p>
        <p>
            <label htmlFor="content">Note</label>
            <textarea name="content" id="" rows="5" />
        </p>
        <button>Add Notes</button>
    </form>
}
import redirect from '@remix-run/node'
import NewNote from '../components/NewNote'
import { getStoredNotes, storedNotes } from '../data/notes';

export default function Notes() {
    return <main>
        Hello World
        <NewNote />
    </main>
}

export async function action({request})
{
    const formData = await request.formData();
    // console.log(formData.get('title'));
    const noteData = Object.fromEntries(formData);
    const existingNotes = await getStoredNotes();

    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storedNotes(updatedNotes);
    return redirect('/notes')
}
import { useState } from "react";
import StudentProfile from "./student.jsx";

function App() {
    const [marks, setMarks] = useState(85);

    return(
        <div style={{padding: "20px"}}>
            <h2>Student Dashboard</h2>

            <StudentProfile name="Ahamed" marks ={marks} />

            <br />

            <button onClick={() => setMarks(55)} >Update Marks to 55 </button>
            <button onClick={() => setMarks(75)} style={{marginLeft: "10px"}}>
                Update Marks to 75
            </button>
        </div>
    )
}

export default App;
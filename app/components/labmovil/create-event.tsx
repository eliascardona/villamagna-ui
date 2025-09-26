import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

interface ApiEvento {
    _id: string;
    carrera: { nombre: string } | string;
    semestre: string;
    materia: string;
    campus: { nombre: string } | string;
    laboratorio?: { nombre: string } | string | null;
    fecha: string;
    horaInicio: string;
    horaFin: string;
    estatus: boolean;
}

export function FullCalendarImpl() {
    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const fromString = "2025-10-06T10:00:00-06:00";
                const from_Date = new Date(fromString);
                const from = from_Date.toISOString();

                const to_String = "2025-10-09T12:00:00-06:00";
                const to_Date = new Date(to_String);
                const to = to_Date.toISOString();

                const res = await axios.get("http://localhost:8082/eventos", {
                    params: {
                        from: "2025-10-06T10:00:00-06:00",
                        to: "2025-10-09T12:00:00-06:00",
                        estatus: true,
                    },
                });

                const data = res.data.results as ApiEvento[];

                const mapped: any[] = data.map((ev) => ({
                    id: ev._id,
                    title: `${ev.materia} (${ev.semestre}) - ${typeof ev.carrera === "string" ? ev.carrera : ev.carrera.nombre}`,
                    start: `${ev.fecha}T${ev.horaInicio}`,
                    end: `${ev.fecha}T${ev.horaFin}`,
                    backgroundColor: ev.estatus ? "#4caf50" : "#f44336",
                }));

                setEvents(mapped);
            } catch (err) {
                console.error("Error cargando eventos", err);
            }
        };
        fetchEventos();
    }, []);

    return (
        <div className="w-full grid place-items-center">
            <div className="w-[50%] h-[70vh] grid gap-6">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    locale="es"
                    height="90vh"
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                />
            </div>
        </div>
    )
}
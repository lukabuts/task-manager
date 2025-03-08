import { TaskProgressData } from "@/types/global";
import { useRef, useEffect } from "react";

const TaskProgressCanvas = ({ data }: { data: TaskProgressData }) => {
    const { completed, overdue, due } = data;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const radius = canvas.width / 2;
        const total = completed + overdue + due;
        const startAngle = -Math.PI / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(radius, radius, radius - 10, 0, Math.PI * 2);
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#eee";
        ctx.stroke();

        const drawSegment = (
            startAngle: number,
            endAngle: number,
            color: string
        ) => {
            ctx.beginPath();
            ctx.arc(radius, radius, radius - 10, startAngle, endAngle);
            ctx.lineWidth = 20;
            ctx.strokeStyle = color;
            ctx.stroke();
        };

        const completedAngle = (completed / total) * Math.PI * 2;
        const overdueAngle = (overdue / total) * Math.PI * 2;
        const dueAngle = (due / total) * Math.PI * 2;

        drawSegment(startAngle, startAngle + completedAngle, "#4cc790");
        drawSegment(
            startAngle + completedAngle,
            startAngle + completedAngle + overdueAngle,
            "#ff3b30"
        );
        drawSegment(
            startAngle + completedAngle + overdueAngle,
            startAngle + completedAngle + overdueAngle + dueAngle,
            "#3c9ee5"
        );
    }, [completed, overdue, due]);

    return (
        <div className="relative w-fit">
            <canvas ref={canvasRef} width={200} height={200}></canvas>
            <div className="absolute top-0 left-0 w-full h-full text-center flex items-center justify-center">
                <div className="flex flex-col items-start justify-start gap-1">
                    {data.completed > 0 || data.due > 0 || data.overdue > 0 ? (
                        <>
                            <div className="flex items-center gap-2">
                                <div className="bg-[#4cc790] size-4 rounded-full"></div>
                                <span>completed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-[#ff3b30] size-4 rounded-full"></div>
                                <span>Overdue</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-[#3c9ee5] size-4 rounded-full"></div>
                                <span>Pending</span>
                            </div>
                        </>
                    ) : (
                        <span>No tasks</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskProgressCanvas;

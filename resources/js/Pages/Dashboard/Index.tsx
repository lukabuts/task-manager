import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { TaskProgressCircle } from "./Partials";
import { TaskProgressData, Task } from "@/types/global";

export default function Dashboard({
    taskStats,
    recentTasks,
    quote,
}: {
    taskStats: TaskProgressData;
    recentTasks: Task[];
    quote: string;
}) {
    const { auth, translations } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title={translations.dashboard.title} />

            {/* Greeting */}
            <h1 className="text-2xl font-semibold mb-4">
                Hello, {auth.user.name} 👋
            </h1>

            {/* Task Progress Circle */}
            <TaskProgressCircle data={taskStats} />

            {/* Recently Added Tasks */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">
                    {translations.dashboard.recent_tasks}
                </h2>
                <div className="space-y-2">
                    {recentTasks.length > 0 ? (
                        recentTasks.map((task) => (
                            <Link
                                href={route("tasks.show", task.id)}
                                key={task.id}
                                className="p-3"
                            >
                                <p className="font-medium">{task.name}</p>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500">
                            {translations.dashboard.no_tasks}
                        </p>
                    )}
                </div>
            </div>

            {/* Motivational Quote */}
            <div
                className="mt-6 p-4 rounded-lg text-center"
                dangerouslySetInnerHTML={{ __html: quote }}
            ></div>
        </AuthenticatedLayout>
    );
}

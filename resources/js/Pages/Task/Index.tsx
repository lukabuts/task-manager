import TaskCard from "@/Components/TaskCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PaginatedTasks, Task } from "@/types/global";
import { Head, Link } from "@inertiajs/react";

function Index({ tasks }: { tasks: PaginatedTasks }) {
    return (
        <AuthenticatedLayout>
            <Head title="My Tasks" />
            {tasks.data.length === 0 ? (
                <div className="text-center py-6">
                    <p className="text-gray-600 dark:text-gray-400">
                        You have no tasks at the moment.
                    </p>
                </div>
            ) : (
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
                            My Tasks
                        </h1>
                    </div>

                    <div className="grid gap-4">
                        {tasks.data.map((task) => (
                            <TaskCard task={task} key={task.id} />
                        ))}
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}

export default Index;

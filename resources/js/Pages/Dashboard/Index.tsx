import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { TaskProgressCircle } from "./Partials";
import { TaskProgressData, Task } from "@/types/global";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Progress,
    Badge,
} from "@/Components/ui";

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

            <div className="min-h-dashboard flex flex-col md:space-y-6 space-y-4">
                {/* Greeting Card */}
                <Card>
                    <CardHeader>
                        <h1 className="title">
                            {translations.dashboard.hello},{" "}
                            {auth.user.name.split(" ")[0]} 👋
                        </h1>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500">
                            {translations.dashboard.welcome_message}
                        </p>
                    </CardContent>
                </Card>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-6 gap-4 flex-grow">
                    {/* Combined Task Progress & Task Statistics */}
                    <Card className="col-span-1">
                        <CardHeader>
                            <CardTitle>
                                {translations.dashboard.task_statistics}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center">
                                <TaskProgressCircle
                                    data={taskStats}
                                    trans={{
                                        completed:
                                            translations.dashboard.completed,
                                        overdue: translations.dashboard.overdue,
                                        pending: translations.dashboard.pending,
                                        no_tasks:
                                            translations.dashboard.no_tasks,
                                    }}
                                />
                            </div>

                            <div className="space-y-3 mt-4">
                                <div className="flex justify-between items-center">
                                    <p>
                                        {translations.dashboard.tasks_completed}
                                        :
                                    </p>
                                    <Badge className="bg-green-500 text-white">
                                        {taskStats.completed}
                                    </Badge>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>{translations.dashboard.tasks_due}:</p>
                                    <Badge className="bg-blue-500 text-white">
                                        {taskStats.due}
                                    </Badge>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>
                                        {translations.dashboard.tasks_overdue}:
                                    </p>
                                    <Badge className="bg-red-500 text-white">
                                        {taskStats.overdue}
                                    </Badge>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-500 mb-1">
                                    {translations.dashboard.weekly_progress}:
                                </p>
                                <Progress
                                    value={
                                        (taskStats.completed /
                                            taskStats.total) *
                                        100
                                    }
                                />
                                <p className="mt-2 font-semibold">
                                    {taskStats.completed}/{taskStats.total}{" "}
                                    {translations.dashboard.tasks_completed}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recently Added Tasks */}
                    <Card className="col-span-1 xl:col-span-2">
                        <CardHeader>
                            <CardTitle>
                                {translations.dashboard.recent_tasks}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {recentTasks.length > 0 ? (
                                    recentTasks.map((task) => (
                                        <Link
                                            href={route("tasks.show", task.id)}
                                            key={task.id}
                                            className="flex items-center justify-between p-3 rounded-lg transition dark:bg-gray-900 bg-gray-100 border container-border gap-1"
                                        >
                                            <p className="font-medium">
                                                {task.name}
                                            </p>
                                            <Badge
                                                className={`${
                                                    task.completed
                                                        ? "bg-green-500 text-white"
                                                        : "bg-yellow-500 text-white"
                                                }`}
                                            >
                                                {task.completed
                                                    ? translations.dashboard
                                                          .completed
                                                    : translations.dashboard
                                                          .pending}
                                            </Badge>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-gray-500">
                                        {translations.dashboard.no_tasks}
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="max-xl:hidden"></div>
                </div>

                {/* Motivational Quote */}
                <div className="text-lg italic text-gray-500 col-span-full text-center mt-auto">
                    <div dangerouslySetInnerHTML={{ __html: quote }} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

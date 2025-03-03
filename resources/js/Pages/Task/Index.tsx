import { TaskCard, PaginationControls, FilterCard } from "./Partials";
import { Button } from "@/Components/ui";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PaginatedTasks, Params } from "@/types/global";
import { Head, router, usePage } from "@inertiajs/react";
import { useEffect } from "react";

function Index({ tasks }: { tasks: PaginatedTasks }) {
    const { translations } = usePage().props;
    const { params } = route();

    if (params.page && Number(params.page) > tasks.last_page) {
        navigatePage(tasks.last_page);
    }

    function navigatePage(page: number) {
        router.get(route("tasks.index", { ...params, page }));
    }

    useEffect(() => {
        window.history.pushState({}, "", route("tasks.index", params));
    }, []);

    const updateParams = (paramType: keyof Params) => {
        delete params[paramType];
        router.get(route("tasks.index", params));
    };

    const isFilterApplied =
        Object.keys(params).filter((param) => param !== "page").length > 0;
    return (
        <AuthenticatedLayout>
            <Head title={translations.my_tasks_page.title} />
            {tasks.total === 0 && !isFilterApplied ? (
                <div className="text-center sm:py-6 py-4">
                    <p className="text-gray-600 dark:text-gray-400 text-nowrap">
                        {translations.my_tasks_page.no_task}
                    </p>
                </div>
            ) : (
                <>
                    <div>
                        <FilterCard
                            isFilterApplied={isFilterApplied}
                            params={params}
                            updateParams={updateParams}
                            my_tasks_page={translations.my_tasks_page}
                            total={tasks.total}
                        />
                        <div className="grid gap-4">
                            {tasks.data.map((task) => (
                                <TaskCard task={task} key={task.id} />
                            ))}
                        </div>
                        {/* Pagination Controls */}
                        <PaginationControls
                            tasks={tasks}
                            next={translations.my_tasks_page.next}
                            previous={translations.my_tasks_page.previous}
                            navigatePage={navigatePage}
                        />
                    </div>
                    {isFilterApplied && tasks.total === 0 && (
                        <div className="text-center">
                            <p className="text-gray-600 dark:text-gray-400 text-nowrap">
                                {translations.my_tasks_page.filter_no_results}
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => router.get(route("tasks.index"))}
                                className="mt-4"
                            >
                                {translations.my_tasks_page.clear_filters}
                            </Button>
                        </div>
                    )}
                </>
            )}
        </AuthenticatedLayout>
    );
}

export default Index;

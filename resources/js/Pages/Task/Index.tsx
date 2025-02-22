import TaskCard from "@/Components/TaskCard";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PaginatedTasks } from "@/types/global";
import { Head, router, usePage } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginate from "react-paginate";

function Index({ tasks }: { tasks: PaginatedTasks }) {
    const { translations } = usePage().props;
    function navigatePage(page: number) {
        router.get(route("task.index", { page }));
    }
    const page = Number(route().params.page);
    if (page && page > tasks.last_page) {
        navigatePage(tasks.last_page);
    }

    return (
        <AuthenticatedLayout>
            <Head title={translations.my_tasks_page.title} />
            {tasks.total === 0 ? (
                <div className="text-center sm:py-6 py-4">
                    <p className="text-gray-600 dark:text-gray-400">
                        {translations.my_tasks_page.no_task}
                    </p>
                </div>
            ) : (
                <div>
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                        <h1 className="title">
                            {translations.my_tasks_page.title}
                        </h1>
                        <span className="dark:text-gray-400 text-gray-600">
                            {translations.my_tasks_page.total}: {tasks.total}
                        </span>
                    </div>
                    <div className="grid gap-4">
                        {tasks.data.map((task) => (
                            <TaskCard task={task} key={task.id} />
                        ))}
                    </div>
                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center mt-4 transition-colors">
                        <ReactPaginate
                            previousLabel={
                                <Button
                                    variant="outline"
                                    disabled={!tasks.prev_page_url}
                                >
                                    <ChevronLeft />
                                    <span>
                                        {translations.my_tasks_page.previous}
                                    </span>
                                </Button>
                            }
                            nextLabel={
                                <Button
                                    variant="outline"
                                    disabled={!tasks.next_page_url}
                                >
                                    <span>
                                        {translations.my_tasks_page.next}
                                    </span>
                                    <ChevronRight />
                                </Button>
                            }
                            onPageChange={(selectedItem) => {
                                navigatePage(selectedItem.selected + 1);
                            }}
                            pageCount={tasks.last_page}
                            forcePage={tasks.current_page - 1}
                            containerClassName="flex items-center md:justify-center w-full justify-between gap-4 sm:scale-100"
                            previousClassName="flex items-center"
                            nextClassName="flex items-center"
                            breakLabel="..."
                            breakClassName="px-2 max-md:hidden"
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            renderOnZeroPageCount={null}
                            pageLinkClassName="h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-gray-100 hover:text-accent-foreground dark:bg-gray-700 dark:hover:text-gray-50 dark:hover:bg-gray-800 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 max-md:hidden"
                            activeLinkClassName="bg-gray-100 dark:bg-gray-800"
                        />
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}

export default Index;

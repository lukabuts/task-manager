import { Button } from "@/Components/ui";
import { PaginatedTasks } from "@/types/global";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginate from "react-paginate";

const PaginationControls = ({
    tasks,
    next,
    previous,
    navigatePage,
}: {
    tasks: PaginatedTasks;
    next: string;
    previous: string;
    navigatePage: (page: number) => void;
}) => {
    return (
        <div className="flex justify-center items-center mt-4 transition-colors">
            <ReactPaginate
                previousLabel={
                    <Button variant="outline" disabled={!tasks.prev_page_url}>
                        <ChevronLeft />
                        <span>{previous}</span>
                    </Button>
                }
                nextLabel={
                    <Button variant="outline" disabled={!tasks.next_page_url}>
                        <span>{next}</span>
                        <ChevronRight />
                    </Button>
                }
                onPageChange={(selectedItem) => {
                    navigatePage(selectedItem.selected + 1);
                }}
                pageCount={tasks.last_page}
                forcePage={tasks.current_page - 1}
                containerClassName={`${
                    tasks.last_page === 1 ? "hidden" : ""
                } flex items-center md:justify-center w-full justify-between gap-4 sm:scale-100`}
                previousClassName="flex items-center"
                nextClassName="flex items-center"
                breakLabel="..."
                breakClassName="px-2 max-md:hidden"
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                renderOnZeroPageCount={null}
                pageLinkClassName="h-9 px-4 py-2 border container-border bg-background shadow-sm hover:bg-gray-100 hover:text-accent-foreground dark:bg-gray-700 dark:hover:text-gray-50 dark:hover:bg-gray-800 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 max-md:hidden"
                activeLinkClassName="bg-gray-100 dark:bg-gray-800"
            />
        </div>
    );
};

export default PaginationControls;

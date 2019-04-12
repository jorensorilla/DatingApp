namespace DatingApp.API.Helpers
{
    public class PaginationHeader
    {
        public int CurrentPage { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }
        //information we want to send back inside the header
        public PaginationHeader (int currentPage, int itemsPerPage, int totalItems, int totalPages) {
            
        }
    }
}
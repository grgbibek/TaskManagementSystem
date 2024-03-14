using Common.Enum;
using System.ComponentModel.DataAnnotations;

namespace TaskManagementSystem.Data
{
    public class Tasks
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }
        [Required(ErrorMessage = "DueDate is required")]
        public DateTime DueDate { get; set; }
        [Required(ErrorMessage = "Priority is required")]
        public PriorityEnum Priority { get; set; }
    }
   
}

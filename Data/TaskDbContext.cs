using Microsoft.EntityFrameworkCore;

namespace TaskManagementSystem.Data
{
    public class TaskDbContext : DbContext
    {
        public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options)
        {
        }

        public DbSet<Tasks> Tasks { get; set; }
    }

}

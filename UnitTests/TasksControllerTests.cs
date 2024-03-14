using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Common.Enum;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;
using TaskManagementSystem.Controllers;
using TaskManagementSystem.Data;

namespace UnitTest
{
    [TestFixture]
    public class TasksControllerTests
    {
        private TaskDbContext _context;
        private TasksController _controller;
        private IMapper _mapper = new Mock<IMapper>().Object;


        [SetUp]
        public void Setup()
        {
            // Set up an in-memory database for testing
            var options = new DbContextOptionsBuilder<TaskDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;
            _context = new TaskDbContext(options);

            // Seed some test data
            _context.Tasks.AddRange(new List<Tasks>
            {
                new Tasks { Id = 1, Title = "Task 1", Description = "Description 1", DueDate = DateTime.Now, Priority = PriorityEnum.High },
                new Tasks { Id = 2, Title = "Task 2", Description = "Description 2", DueDate = DateTime.Now.AddDays(1), Priority = PriorityEnum.Medium }
            });
            _context.SaveChanges();

            _controller = new TasksController(_context, _mapper);
        }

        [Test]
        public async Task GetTasks_ReturnsOkResult()
        {
            // Act
            var result = await _controller.GetTasks();

            // Assert
            Assert.IsInstanceOf<OkObjectResult>(result.Result);
        }

        [Test]
        public async Task GetTask_ReturnsNotFoundResult_WhenInvalidIdProvided()
        {
            // Arrange
            var invalidId = -1;

            // Act
            var result = await _controller.GetTask(invalidId);

            // Assert
            Assert.IsInstanceOf<NotFoundResult>(result.Result);
        }

        [Test]
        public async Task AddTask_ReturnsCreatedAtActionResult()
        {
            // Arrange
            var task = new Tasks { Title = "New Task", Description = "New Description", DueDate = DateTime.Now.AddDays(2), Priority = PriorityEnum.Low };

            // Act
            var result = await _controller.AddTask(task);

            // Assert
            Assert.IsInstanceOf<CreatedAtActionResult>(result.Result);
        }


        [TearDown]
        public void TearDown()
        {
            // Clean up the in-memory database after each test
            _context.Dispose();
        }
    }
}

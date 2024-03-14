using AutoMapper;
using Common.Dto;
using TaskManagementSystem.Data;

namespace TaskManagementSystem.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Tasks, TaskDto>(); 
            CreateMap<TaskDto, Task>();
        }
    }
}

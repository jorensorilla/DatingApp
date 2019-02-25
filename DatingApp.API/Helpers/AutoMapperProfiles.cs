using System;
using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    // Automapper uses profiles to help it understand the souce and destination of what it is mapping
    // Automapper is convention based. We get a lot of stuff for free just based on what we name our classes
    // It is smart enough to determine if two properties between two objects are supposed to be mapped based on
    // the property name (i.e. Username, Gender, etc) so they don't need to be configured at all unlike Age and
    // PhotoUrl
    public class AutoMapperProfiles : Profile
    {
          public AutoMapperProfiles()
          {
              CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });
                
              CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });
              CreateMap<Photo, PhotosForDetailedDto>();
          }
    }
}
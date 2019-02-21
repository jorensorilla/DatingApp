using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext _context;
        public DatingRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {   // Tell entity framework to include photos (won't be automatically included as it is a navigation property)
            // even though it is a part of the User class
            var user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(p =>p.Photos).ToListAsync();
            return users;
        }

        public async Task<bool> SaveAll()
        {
            // if > 0 changes then true. if = 0 then nothing is changed in the database, returns false
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
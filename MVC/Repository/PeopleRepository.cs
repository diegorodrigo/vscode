namespace MVC.Repository
{
    public interface IPeopleRepository
    {
        string GetNameById(int id);
    }
    public class PeopleRepository : IPeopleRepository
    {
        public PeopleRepository(string connectiongString){
            
        }

        public string GetNameById(int id)
        {
            return "Diego Rodrigo Santos";
        }
    }
}
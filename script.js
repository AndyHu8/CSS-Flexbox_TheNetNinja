var all_articles = document.querySelectorAll('.article');

document.querySelector('.stack').addEventListener("click", function()
{
    all_articles.forEach(element => {
        element.classList.add('stack');
    });
});

document.querySelector('.grid').addEventListener("click", function()
{
    all_articles.forEach(element => {
        element.classList.remove('stack');
    });
});
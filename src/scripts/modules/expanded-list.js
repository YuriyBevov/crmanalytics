const expandedLists = document.querySelectorAll('.expanded-list');

if(expandedLists) {
  const init = (items) => {
    items.forEach(item => {
      item.querySelector('.expanded-list__item-header').addEventListener('click', () => {
        item.classList.toggle('expanded');
      });
    });
  };

  expandedLists.forEach(list => {
    const items = list.querySelectorAll('.expanded-list__item');
    init(items);
  });
}


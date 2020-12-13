function highLight(node, e) {
  switch (node) {
    case "top":
      e.currentTarget.style.color = "#fff";
      break;
    case "clauses":
      e.currentTarget.style.backgroundColor = "#845f3f";
      e.currentTarget.style.color = "#fff";
      break;
    case "icon-cart":
      e.currentTarget.style.color = "#845f3f";
      break;
    case "icon-search":
      e.currentTarget.style.color = "#845f3f";
      break;
    case "tab-item":
      e.currentTarget.style.color = "#845f3f";
      break;
    case 'fixed-icon':
      e.currentTarget.childNodes.forEach((child, index) => {
        switch (index) {
          case 0:
            child.style.color = '#845f3f'
            break;
          case 1:
            child.style.color = '#845f3f'
            break;
          case 2:
            child.style.display = 'block'
        }
      })
      break;
    case 'banner-icon':
      e.currentTarget.style.background = "#845f3f";
      break;
    case 'card':
      e.currentTarget.style.cssText = "transform: translate(0,-2px); box-shadow: 0 2px 20px rgba(0,0,0,.1)";
      break;
  }
}
function fade(node, e) {
  switch (node) {
    case "top":
      e.currentTarget.style.color = "#e7e7e7";
      break;
    case "clauses":
      e.currentTarget.style.backgroundColor = "#fff";
      e.currentTarget.style.color = "#666666";
      break;
    case "icon-cart":
      e.currentTarget.style.color = "#333333";
      break;
    case "icon-search":
      e.currentTarget.style.color = "#333333";
      break;
    case "tab-item":
      e.currentTarget.style.color = "#666666";
      break;
    case "fixed-icon":
      e.currentTarget.childNodes.forEach((child, index) => {
        switch (index) {
          case 0:
            child.style.color = '#666666'
            break;
          case 1:
            child.style.color = '#333333'
            break;
          case 2:
            child.style.display = 'none'
        }
      })
      break;
    case 'banner-icon':
      e.currentTarget.style.background = 'rgba(30, 30, 30, 0.3)';
      break;
    case 'card':
      e.currentTarget.style.cssText = "box-shadow: none";
      break;  
  }
}
export {
  highLight,
  fade
}
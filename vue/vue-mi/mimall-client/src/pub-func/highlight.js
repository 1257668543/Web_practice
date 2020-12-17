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
    case 'brown':
      e.currentTarget.style.cssText = 'background-color: #D1BFA6; border-color: #D1BFA6;'
      break;
    case 'brown-stroke':
      e.currentTarget.style.cssText = 'background-color: #845f3f; color: #fff;'
      break;
    case 'icon-detail':
      e.currentTarget.style.background = "#845f3f"
      e.currentTarget.childNodes.forEach((child) => {
        child.style.color = "#FFFFFF"
      })
      break;
    case 'banner-li':
      e.currentTarget.style.cssText = 'background-color: rgba(0, 0, 0, .15)';
      break;
    case 'banner-span':
      e.currentTarget.style.color = "#dfaf7e"
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
    case 'brown':
      e.currentTarget.style.cssText = 'background-color: #845f3f; border-color: #845f3f;'
      break;
    case 'brown-stroke':
      e.currentTarget.style.cssText = 'background-color: #fff; color: #845f3f;'
      break;  
    case 'icon-detail':
      e.currentTarget.style.background = "none"
      e.currentTarget.childNodes.forEach((child) => {
        if (child.id === 'favor') {
          child.style.color = '#845f3f'
        } else {
          child.style.color = "#999"
        }
      })
      break;  
    case 'banner-li':
      e.currentTarget.style.cssText = 'background-color: none';
      break;
    case 'banner-span':
      e.currentTarget.style.color = "#ffffff";
      break;  
  }
}
export {
  highLight,
  fade
}
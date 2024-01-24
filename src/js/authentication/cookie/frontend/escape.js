export const escapeHTML = (str) =>
  str.replace(/[&<>"'\/]/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '\\':
        return '&#39;'
      case '/':
        return '&#x2F;'
      default:
        return char
    }
  })

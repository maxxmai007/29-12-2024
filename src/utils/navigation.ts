export function scrollToSection(sectionId: string, options: ScrollIntoViewOptions = {}) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      ...options
    });
  }
}

export function getNextSection(currentId: string, sections: readonly { id: string }[]) {
  const currentIndex = sections.findIndex(section => section.id === currentId);
  return sections[currentIndex + 1];
}
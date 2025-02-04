export const goToView = (id: string) => {
    if(!id) return
    const doc = document.getElementById(id)
    doc?.scrollTo({})
}
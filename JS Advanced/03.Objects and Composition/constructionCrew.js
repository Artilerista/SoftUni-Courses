function constructionCrew(object) {
    if(object.dizziness === true){
        object.levelOfHydrated += 0.1 * object.weight * object.experience;
    }
    return object;
}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)
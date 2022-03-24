function legendaryFarming(string) {
    let list = {
        shadowmourne: {
            shards: 0,
        },
        dragonwrath: {
            motes: 0,
        },
        valanyr: {
            fragments: 0,
        },
    };
    let junk = {}
    let array = string.split(' ');
    for (let i = 0; i < array.length; i += 2) {
        let num = Number(array[i]);
        let element = array[i + 1].toLocaleLowerCase();
        if (element === 'motes') {
            
            list.dragonwrath[element] += num;

            if (list.dragonwrath[element] >= 250) {
                list.dragonwrath[element] -= 250;
                console.log('Dragonwrath obtained!')
                break;
            }
        } else if (element === 'shards') {
            
            list.shadowmourne[element] += num;

            if (list.shadowmourne[element] >= 250) {
                list.shadowmourne[element] -= 250;
                console.log('Shadowmourne obtained!')
                break;
            }
        } else if (element === 'fragments') {
            
            list.valanyr[element] += num;

            if (list.valanyr[element] >= 250) {
                list.valanyr[element] -= 250;
                console.log('Valanyr obtained!')
                break;
            }
        } else {
            if (junk.hasOwnProperty(element)) {
                junk[element] += num;
            } else {
                junk[element] = num;
            }
        }
    }
    let arrayOfList = [];
    let sortedList = Object.entries(list);

    for (let [item, obj] of sortedList) {
        let sortedObj = Object.entries(obj)
        for (let line of sortedObj) {
            arrayOfList.push(line);
        }
    }
    let sortedArrayOfList = arrayOfList.sort((a, b) => a[0].localeCompare(b[0]));
    let reSortedArrayOfList = sortedArrayOfList.sort((a, b) => b[1] - a[1]);
    let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [element, num] of reSortedArrayOfList) {
        console.log(`${element}: ${num}`);
    }

    for (let [element, num] of sortedJunk) {
        console.log(`${element}: ${num}`);
    }
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
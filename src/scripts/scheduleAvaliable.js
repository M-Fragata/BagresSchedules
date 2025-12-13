
export const scheduleAvaliable = async (schedules) => {
    
    const hourCount = schedules.reduce((acc, schedule) => {
        const hour = schedule.hour

        acc[hour] = (acc[hour] || 0) + 1
        
        return acc
    }, {})

    return hourCount
}
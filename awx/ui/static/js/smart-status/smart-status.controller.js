export default ['$scope', function ($scope) {

    var str = $scope.job_template.id+'_smart',
    recentJobs = $scope.job_template.summary_fields.recent_jobs;
    $scope[str] = {
        id: $scope.job_template.id,
        sparkArray: [],
        jobIds: {},
        smartStatus: []
    };
    for(var i=0; i<recentJobs.length; i++){
        if(recentJobs[i].status==='successful'){
            $scope[str].sparkArray[i] = 1;
        }
        if(recentJobs[i].status==='failed' || recentJobs[i].status==='error' || recentJobs[i].status==='canceled'){
            $scope[str].sparkArray[i] = -1;
        }
        if(recentJobs[i].status==='queued' || recentJobs[i].status==='new' || recentJobs[i].status==='pending' || recentJobs[i].status==='waiting' || recentJobs[i].status==='running'){
            $scope[str].sparkArray[i] = 0;
        }
        $scope[str].jobIds[i] = recentJobs[i].id;
        $scope[str].smartStatus[i] = recentJobs[i].status;
    }
}];

//
//
// JOB_STATUS_CHOICES = [
//         ('new', _('New')),                  # Job has been created, but not started.
//         ('pending', _('Pending')),          # Job has been queued, but is not yet running.
//         ('waiting', _('Waiting')),          # Job is waiting on an update/dependency.
//         ('running', _('Running')),          # Job is currently running.
//         ('successful', _('Successful')),    # Job completed successfully.
//         ('failed', _('Failed')),            # Job completed, but with failures.
//         ('error', _('Error')),              # The job was unable to run.
//         ('canceled', _('Canceled')),        # The job was canceled before completion.
// final states only*****
//     ]
//
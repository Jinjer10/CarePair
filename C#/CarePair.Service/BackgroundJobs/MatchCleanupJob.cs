using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace CarePair.Service.BackgroundJobs
{
    public class MatchCleanupJob : BackgroundService
    {
        private readonly MatchingService _matchingService;
        private readonly ILogger<MatchCleanupJob> _logger;

        public MatchCleanupJob(MatchingService matchingService, ILogger<MatchCleanupJob> logger)
        {
            _matchingService = matchingService;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("בודק שיבוצים שפגו תוקף...");
                _matchingService.RemoveExpiredMatches();

                if (DateTime.Now.Day == 1)
                {
                    _logger.LogInformation("מאפס שיבוצים לחודש חדש...");
                    _matchingService.ResetMonthlyMatches();
                }

                await Task.Delay(TimeSpan.FromHours(24), stoppingToken);
            }
        }
    }

}

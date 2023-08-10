<?php

namespace App\Console\Commands;

use App\Models\Game;
use Illuminate\Console\Command;

class CompleteAssetPredictions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'prediction:complete {--model=} {--service=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Complete pending asset prediction games.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $model = $this->option('model');
        $serviceClass = $this->option('service');

        if ($model && $serviceClass) {
            Game::inProgress()
                ->where('gameable_type', $model)
                ->with('account.user')
                ->get()
                ->each(function ($game) use ($serviceClass) {
                    (new $serviceClass($game->account->user))->complete($game);
                });
        }

        return 0;
    }
}

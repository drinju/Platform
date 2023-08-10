<?php

namespace App\Helpers\Api;

use Illuminate\Support\Collection;

abstract class AssetApi extends Api
{
    const TYPE_LIST = 'list';
    const TYPE_PRICE = 'price';
    const TYPE_HISTORY = 'history';

    abstract protected function getEndpoints(): array;

    abstract protected function getKeys(): array;

    abstract protected function getMappers(): array;

    protected function getEndpoint(string $type, ...$params): string
    {
        return $params ? sprintf($this->getEndpoints()[$type], ...$params) : $this->getEndpoints()[$type];
    }

    protected function getDataKey(string $type): string
    {
        return $this->getKeys()[$type];
    }

    protected function getData(string $type, ...$params)
    {
        $endpoint = $this->getEndpoint($type, ...$params);
        $key = $this->getDataKey($type);

        $data = data_get($this->get($endpoint), $key);

        $data = is_array($data)
            ? collect($data)
            : (is_numeric($data) ? (float) $data : $data);

        $mapperFunction = $this->getMappers()[$type] ?? NULL;

        return $mapperFunction && $data ? $mapperFunction($data) : $data;
    }

    public function getList(): ?Collection
    {
        return $this->getData(self::TYPE_LIST);
    }

    public function getPrice(string $id): ?float
    {
        return $this->getData(self::TYPE_PRICE, $id);
    }

    public function getHistory(string $id, ...$params): ?Collection
    {
        return $this->getData(self::TYPE_HISTORY, $id, ...$params);
    }
}
